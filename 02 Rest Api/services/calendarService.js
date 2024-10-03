const { google } = require('googleapis');
const config = require('../config/config');

// Initialize the Calendar API 
const calendar = google.calendar({
  version: 'v3',
  auth: config.google.apiKey  
});

/**
 * Get Free/Busy Intervals
 * @param {string} calendarId - Shared Google Calendar ID
 * @param {string} timeMin - The start time in ISO format
 * @param {string} timeMax - The end time in ISO format
 * @returns {Promise<Array>} - Array of busy intervals
 */
async function getFreeBusyIntervals(calendarId, timeMin, timeMax) {
  try {
    const res = await calendar.freebusy.query({
      requestBody: {
        timeMin: timeMin,
        timeMax: timeMax,
        items: [{ id: calendarId }],
      },
    });

    const busyTimes = res.data.calendars[calendarId].busy;
    return busyTimes;
  } catch (err) {
    console.error('Error fetching free/busy intervals:', err);
    throw err;
  }
}

module.exports = {
  getFreeBusyIntervals
};
