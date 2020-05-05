// 文字转语音
export function speak(text) {
	var v = new SpeechSynthesisUtterance();
	v.text = text;
	//中文
	v.lang = 'zh';
	v.rate = 0.7;
	speechSynthesis.speak(v);
}