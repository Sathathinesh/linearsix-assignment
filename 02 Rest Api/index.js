const { getFreeBusyIntervals } = require('./services/calendarService');
const prompt = require('prompt');

//user input
prompt.start();

prompt.get(['calendarId', 'timeMin', 'timeMax'], async (err, result) => {
  if (err) {
    console.error('Error getting user input:', err);
    return;
  }

  const { calendarId, timeMin, timeMax } = result;

  try {
    // Fetch free/busy intervals
    const busyIntervals = await getFreeBusyIntervals(calendarId, timeMin, timeMax);

    // Display the busy intervals
    if (busyIntervals.length) {
      console.log('Busy intervals:');
      busyIntervals.forEach((interval, index) => {
        console.log(`${index + 1}: Start - ${interval.start}, End - ${interval.end}`);
      });
    } else {
      console.log('No busy intervals found.');
    }
  } catch (error) {
    console.error('Error retrieving busy intervals:', error);
  }
});
