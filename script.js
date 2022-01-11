function yourActivity(){
    fetch("http://www.boredapi.com/api/activity?price=0.0")
    .then(res => res.json())
    .then(data =>{
    document.getElementById('activity').innerText = data.activity;})
}