<template>
  <v-card flat>
    <v-toolbar color="primary" dark extended flat></v-toolbar>
    <v-layout row pb-2>
      <v-flex xs8 offset-xs2>
        <v-card class="card--flex-toolbar">
          <v-card-title id="infoCardHeader" class=" px-0">
            <v-spacer></v-spacer>
            <v-avatar color="white" size="128">
              <v-progress-circular v-if="fetching" :size="110" :width="2" color="rgb(131, 186, 67)" indeterminate ></v-progress-circular>
              <img v-else :src="avatarURL.large" alt="avatar" />
            </v-avatar>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
              <v-container fluid fill-height grid-list-xl pa-0 ma-0>
                <v-layout column>
                  <template v-for="(btn, key) in userDetails">
                    <v-layout align-center column wrap v-show="userDetails[key].active" :key="`card_1${key}_inactive`"  >
                      <v-flex class="ma-0 px-3 py-0"><v-subheader class="title text-capitalize pa-0 ma-0">{{btn.description}}</v-subheader></v-flex>
                      <v-flex class="ma-0 px-3 py-0" style="word-break: break-all;">
                        <strong v-if="key === 'user'" class="headline text-capitalize" text-truncate>
                          {{btn.name.title}}. {{btn.name.first}} {{btn.name.last}}
                        </strong>
                        <a :href="`mailto:${btn.email}`" v-if="key === 'email'" class="headline" text-truncate>{{btn.email}}</a>
                        <strong v-if="key === 'calendar'" class="headline text-capitalize" text-truncate>
                          {{createCustomDateFormat({dateToFormat: new Date(btn.dob.date), formatString: '#DD# #MMMM# #YYYY#'})}}
                        </strong>
                        <strong v-if="key === 'location'" class="headline text-capitalize" text-truncate>
                          {{btn.location.street}}, {{btn.location.city}}, {{btn.location.state}}, {{btn.location.postcode}}
                        </strong>
                        <a :href="`tel:${cleanPhonenumber(btn.cell)}`" v-if="key === 'call'" class="headline text-capitalize" text-truncate>
                          {{btn.cell}}
                        </a>
                        <strong v-if="key === 'locked'" class="headline" text-truncate>{{btn.login.password}}</strong>
                      </v-flex>
                    </v-layout>
                  </template>
                  <v-layout justify-center row wrap class="elevation-0">
                    <template v-for="(btn, key) in userDetails">
                      <v-btn :key="`btn_1_${key}`" :flat="!userDetails[key].active" small icon fab color="rgb(131, 186, 67)" @mouseenter.stop="toggleButtonActive(key)" >
                        <v-img aspect-ratio="2" contain  :src="require(`./assets/icons/${key}.svg`)" />
                      </v-btn>
                    </template>
                  </v-layout>
                </v-layout>
              </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-footer fixed justify-center align-center>
      <v-spacer></v-spacer>
      <v-btn ma-5 :disabled="fetching" color="rgb(131, 186, 67)" @click="getUser()" >
        <v-progress-circular pl-5 v-if="fetching" :size="20" :width="2" color="rgba(0,0,0,0.5)" indeterminate ></v-progress-circular>
        <span v-else>Refresh User</span>
        </v-btn>
        <v-spacer></v-spacer>
    </v-footer>
  </v-card>
</template>
<script>
import config from '@/config'
const initialUserDetails = {
  user: {
    active: true,
    description: "My Name is:",
    dataKeys: ["name"],
    name: {
      title: "--",
      first: "--",
      last: "--"
    }
  },
  email: {
    active: false,
    description: "My Email is:",
    dataKeys: ["email"],
    email: "--"
  },
  calendar: {
    active: false,
    description: "My Birthday is:",
    dataKeys: ["dob"],
    dob: {
      date: new Date(),
      age: "--"
    }
  },
  location: {
    active: false,
    description: "My Address is:",
    dataKeys: ["location"],
    location: {
      street: "--",
      city: "--",
      state: "--",
      postcode: "--"
    }
  },
  call: {
    active: false,
    description: "My Number is:",
    dataKeys: ["cell"],
    cell: "--"
  },
  locked: {
    active: false,
    description: "My Password is:",
    dataKeys: ["login"],
    login: {
      password: "--"
    }
  }
};

export default {
  data(){
    return{
      initialUserDetails,
      fetching: true,
      userData: null,
      avatarURL: null,
      userDetails: JSON.parse(JSON.stringify(initialUserDetails))
    }
  },
  methods: {
    createCustomDateFormat(formatOption) {
        let dateObject;
        let egObject = {
            dateToFormat: 'dateToFormat: date, for current time/date skip this parameter',
            formatString: 'string'
        };

        let formatString = formatOption.formatString || false;
    
        if(!formatOption){
            console.error('Error formatting, date no format date parameters where supplied, please pass parameters: \n"formatOption = %O', egObject);
            console.info(
                'String Formatting options for (Friday the 1st of January 2016 at 1:01:01 am ~ 01/01/2016 01:01:01):' +
                '\n\tDATE:'+
                '\n\t\t- #YYYY# for century and year eg: 2016 (CCYY).'+
                '\n\t\t- #YY# for only the year eg: 16 (YY).'+
                '\n\t\t- #M# for numerical month eg: 1.'+
                '\n\t\t- #MM# for numerical month eg: 01.'+
                '\n\t\t- #MMM# for abbreviated alphabetic month name eg: Jan.'+
                '\n\t\t- #MMMM# for alphabetic month name eg: January.'+
                '\n\t\t- #DD# for the numerical day eg: 1.'+
                '\n\t\t- #DD# for the numerical day eg: 01.'+
                '\n\t\t- #DDD# for abbreviated alphabetic name of day eg: Fri.'+
                '\n\t\t- #DDDD# for alphabetic name of day eg: Friday.'+
                '\n\t\t- #th# for the ordinal indicator eg: rd, th, st, nd (1st, 2nd, 3rd, 4th, 5th).'+
                '\n\tTIME:'+
                '\n\t\t- #h#  for hours eg: 1#.'+
                '\n\t\t- #hh# for hours 12 hour format eg: 01.'+
                '\n\t\t- #hhh#  for hours 24 hour format eg: 01#.'+
                '\n\t\t- #m# for minutes eg: 1.'+
                '\n\t\t- #mm# for minutes eg: 01.'+
                '\n\t\t- #s# for seconds eg: 1.'+
                '\n\t\t- #ss# for seconds eg: 01.'+
                '\n\t\t- #AMPM# for the meridiem indicator in uppercase eg: AM/PM.'+
                '\n\t\t- #ampm# for the meridiem indicator in lowercase eg: am/pm.'+
                '\n\t-EG:'+
                '\n\t-A formatting string: (#DDDD# the #D##th# of #MMMM# #YYYY# at #h#:#mm#:#ss# #ampm#) will Return -> "Friday the 1st of January 2016 at 1:01:01 am"'
            );
            return false;
        }
    
        if(!formatString){
            console.warn(`WARNING:::::::::::::::::::::::::::\n\t 
            no "formatString" parameter was supplied, please pass parameters: \n"formatOption = %O \nIf no string is sullpied it will default to: %s`, 
            egObject, `${config.dateFormatting.defaultDateformatString} ${config.dateFormatting.defaultTimeFormatString}`);
            console.info(
                'String Formatting options for (Friday the 1st of January 2016 at 1:01:01 am ~ 01/01/2016 01:01:01):' +
                '\n\tDATE:'+
                '\n\t\t- #YYYY# for century and year eg: 2016 (CCYY).'+
                '\n\t\t- #YY# for only the year eg: 16 (YY).'+
                '\n\t\t- #M# for numerical month eg: 1.'+
                '\n\t\t- #MM# for numerical month eg: 01.'+
                '\n\t\t- #MMM# for abbreviated alphabetic month name eg: Jan.'+
                '\n\t\t- #MMMM# for alphabetic month name eg: January.'+
                '\n\t\t- #DD# for the numerical day eg: 1.'+
                '\n\t\t- #DD# for the numerical day eg: 01.'+
                '\n\t\t- #DDD# for abbreviated alphabetic name of day eg: Fri.'+
                '\n\t\t- #DDDD# for alphabetic name of day eg: Friday.'+
                '\n\t\t- #th# for the ordinal indicator eg: rd, th, st, nd (1st, 2nd, 3rd, 4th, 5th).'+
                '\n\tTIME:'+
                '\n\t\t- #h#  for hours eg: 1#.'+
                '\n\t\t- #hh# for hours 12 hour format eg: 01.'+
                '\n\t\t- #hhh  for hours 24 hour format eg: 01#.'+
                '\n\t\t- #m# for minutes eg: 1.'+
                '\n\t\t- #mm# for minutes eg: 01.'+
                '\n\t\t- #s# for seconds eg: 1.'+
                '\n\t\t- #ss# for seconds eg: 01.'+
                '\n\t\t- #AMPM# for the meridiem indicator in uppercase eg: AM/PM.'+
                '\n\t\t- #ampm# for the meridiem indicator in lowercase eg: am/pm.'+
                '\n\t-EG:'+
                '\n\t-A formatting string: (#DDDD# the #D##th# of #MMMM# #YYYY# at #h#:#mm#:#ss# #ampm#) will Return -> "Friday the 1st of January 2016 at 1:01:01 am"'
    
            );
            formatString = `${config.dateFormatting.defaultDateformatString} ${config.dateFormatting.defaultTimeFormatString}`
        }
    
        if(!formatOption.dateToFormat){
            console.warn('Date Formatting warning, no "dateToFormat" parameter was supplied, the current time and date will be used to format the string.' +
                '\n If you would like to format another date please pass parameter "dateToFormat" in parameters object: \n"formatOption = %O', egObject);
    
            let now = new Date().getTime();
            dateObject = new Date(now);
        }else{
            dateObject = new Date(formatOption.dateToFormat);
        }
    
        let YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th;
    
        YY = ((YYYY = dateObject.getFullYear()) + "").slice(-2);
        MM = (M = dateObject.getMonth() + 1) < 10 ? ('0' + M) : M;
        MMM = (MMMM = config.dateFormatting.MONTHS[M - 1]).substring(0, 3);
        DD = (D = dateObject.getDate()) < 10 ? ('0' + D) : D;
        DDD = (DDDD = config.dateFormatting.DAYS[dateObject.getDay()]).substring(0, 3);
        th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) == 1) ? 'st' : (dMod == 2) ? 'nd' : (dMod == 3) ? 'rd' : 'th';
        formatString = formatString.replace("#YYYY#", YYYY).replace("#YY#", YY).replace("#MMMM#", MMMM).replace("#MMM#", MMM).replace("#MM#", MM).replace("#M#", M).replace("#DDDD#", DDDD).replace("#DDD#", DDD).replace("#DD#", DD).replace("#D#", D).replace("#th#", th);
    
        h = (hhh = dateObject.getHours());
        if (h == 0) h = 24;
        if (h > 12) h -= 12;
        hh = h < 10 ? ('0' + h) : h;
        AMPM = (ampm = hhh < 12 ? config.dateFormatting.anteMeridiem : config.dateFormatting.postMeridiem).toUpperCase();
        mm = (m = dateObject.getMinutes()) < 10 ? ('0' + m) : m;
        ss = (s = dateObject.getSeconds()) < 10 ? ('0' + s) : s;
        return formatString.replace("#hhh#", hhh).replace("#hh#", hh).replace("#h#", h).replace("#mm#", mm).replace("#m#", m).replace("#ss#", ss).replace("#s#", s).replace("#ampm#", ampm).replace("#AMPM#", AMPM);
    },
    toggleButtonActive(btnId){
      let self = this;
      Object.keys(self.userDetails).forEach((key)=>{
        if(key != btnId){
          self.userDetails[key].active = false;
        }
        else{
          self.userDetails[key].active = true;
        }
      })
    },
    addData(){
      let self = this;
      Object.keys(self.userDetails).forEach((key)=>{
          Object.keys(self.userData).forEach((k)=>{
            if(self.userDetails[key].dataKeys.includes(k)){
              self.userDetails[key][k] = self.userData[k];
            }
            if(k==='picture'){
              self.avatarURL = self.userData[k]
            }
          })
      });

      console.log('DATA ADDED', self.userDetails);
    },
    getUser(){
      let self = this;
      self.userDetails = JSON.parse(JSON.stringify(initialUserDetails))
      console.log(JSON.stringify(self.userDetails, 0, 4));
      self.fetching = true;
      fetch('https://randomuser.me/api/')
      .then(text=>text.json())
      .then((json)=>{
        self.userData = json.results[0];
        self.fetching = false;
        self.addData();
      })
      .catch(e=>{
        self.fetching = false;
      });
    },
    cleanPhonenumber(n){
      return n.replace(/[`~!@#$%^&*()_|\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
    }
  },
  mounted(){
    this.getUser();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
a{
  color: rgb(131, 186, 67);
  text-decoration: none;
}
a:hover{
  color: rgb(131, 186, 67);
  border-bottom: 1px solid rgb(131, 186, 67);
}
.card--flex-toolbar {
  min-width: 160px;
  margin-top: -15vh;
}

#infoCardHeader{
  height: 85px;
  margin-bottom: 75px;
  border-bottom: 1px solid rgba(0,0,0,.25);
}

#infoCardHeader .v-avatar{
  border: 1px solid rgba(0,0,0,.25) !important;
  z-index: 2;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  top: 15px;
}

.v-toolbar__extension{
  min-height: 20vh !important;
}
</style>
