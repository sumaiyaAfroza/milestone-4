// Implement a countdown timer that counts down from 21 to 15.


let count = 21;  // ১০ থেকে শুরু

const timer = setInterval(() => {
  console.log(count);
  count--;  // প্রতি এক সেকেন্ডে ১ করে কমবে

  if (count < 15) { // যখন ০-এর নিচে চলে যাবে, তখন বন্ধ হবে
    clearInterval(timer);
    console.log("সময় শেষ!");
  }
}, 1000); 