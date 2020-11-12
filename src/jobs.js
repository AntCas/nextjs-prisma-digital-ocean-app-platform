const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.second = 1;

/*
const j = schedule.scheduleJob(rule, function(){
  console.log('The answer to life, the universe, and everything!');
});
*/



const k = schedule.scheduleJob('* * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
