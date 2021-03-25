let img = document.querySelector(".box img");
let heading = document.querySelector(".box h1");



count = 0;

let interval = setInterval(timer, 30);

function timer(){
    count++;

    if(count > 99){
        clearInterval(interval)
    }

   heading.innerHTML = count +"%";
    console.log(count);

    heading.style.opacity = scale(count, 0, 100, 1, 0);
    
    img.style.filter = `blur(${scale(count, 0, 100, 30,0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
