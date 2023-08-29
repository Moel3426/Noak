// Name : Maulana Ihsan Ahmad
// JavaScript algorithm to calculate patient’s estimated waiting time

class Doctor {
  constructor(averageConsultationTime) {
    this.averageConsultationTime = averageConsultationTime;
  }
}

function calculateWaitingTime(doctors, patientPosition) {
  let totalWaitingTime = 0;
  
  for (let i = 0; i < patientPosition - 1; i++) {
    const doctorIndex = i % doctors.length;
    const patientConsultationTime = doctors[doctorIndex].averageConsultationTime;
    totalWaitingTime += patientConsultationTime;
  }
  
  return totalWaitingTime;
}

// How to use:
const doctorA = new Doctor(3); // Doctor A with average consultation time 3 minutes
const doctorB = new Doctor(4); // Doctor B with average consultation time 4 minutes
const doctors = [doctorA, doctorB];
const patientPosition = 15; // John is the 15th patient in the queue

const johnsWaitingTime = calculateWaitingTime(doctors, patientPosition);
console.log(`John's estimated waiting time: ${johnsWaitingTime} minutes`);