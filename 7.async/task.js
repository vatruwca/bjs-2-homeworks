class AlarmClock{
	constructor(){
		this.alarmCollection = [];
		this.timerId  =  null;
	}

	addClock(time, callback, id) {
		const obj = {time, callback, id};
		if (id ==  undefined) {
			throw new Error('нет id')
		}
		if (this.alarmCollection.find(obj => obj.id === id)) {
			return console.error("такой буд уже есть");		
		}
		this.alarmCollection.push(obj);
	}

	removeClock(id) {
		let result = this.alarmCollection.filter(item => item.id !== id);
		if (result.length !== this.alarmCollection.length) {
			this.alarmCollection = result;
			return true;
		}
		return false;
	}

	getCurrentFormattedTime() {
		const currentTime = new Date();
		const hours = currentTime.getHours() < 10 ? `0${currentTime.getHours()}` : `${currentTime.getHours()}`;
		const minutes = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : `${currentTime.getMinutes()}`;
		return (`${hours}:${minutes}`);
	}

	start() {
		const checkClock = call => {if (call.time === this.getCurrentFormattedTime()) {call.callback()}};
					
        if (this.timerId === null) {
            this.timerId = setInterval(() => {this.alarmCollection.forEach(call => checkClock(call))}, 1000);
            }		
	}

	stop() {
		if (this.timerId) {
			clearInterval (this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(obj => console.log(`Будильник № ${obj.id} заведен на ${obj.time}`));
	}

	clearAlarms() {
		stop();
		this.alarmCollection = [];
	}
}


function testCase() {
	let newCall = new AlarmClock();

	newCall.addClock("09:56", () => console.log("Пора на выход"), 1);	
	
	newCall.addClock("09:57", () => {console.log("Срочно на выход"); newCall.removeClock(2)}, 2);	

	newCall.addClock("09:58", () => {console.log("Опаздываешь!!"); newCall.clearAlarms()}, 3);

	newCall.printAlarms();

	newCall.start();
}