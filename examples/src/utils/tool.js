let Tool = {
	ajax : (url,duration) => {
		return new Promise((resolve, reject)=>{
			let duration = duration || 500;
			let xhr = new XMLHttpRequest();
			xhr.open("get", url, true);
			xhr.responseType = "json";
			xhr.onreadystatechange = readyStateHandle;
			xhr.send();

			function readyStateHandle(){
				if(this.readyState !== 4) return;
				if(this.status === 200){
					setTimeout(()=>{ // 虚拟请求时间1s
						resolve(this.response);
					}, duration);
				}else{
					setTimeout(()=>{  // 虚拟请求时间1s
						reject(new Error(this.statusText));
					}, duration); 
				}
			}
		});
	}
}

export default Tool;