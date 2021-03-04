games = ['#frogger_score'] // replace with get games query
for (let i=0; i<games.length; i++ ) {
  getHighScore(games[i])
}

function getHighScore(id){
  let score = $(id);
  console.log(id)
  // Function to run when the DOM is ready
  $(() => { toExpress(); })
  function toExpress() {
      // FETCHING
      fetch(`/getHighScore/1`,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json()) // telling how to handle response
      .then((data) => { // function for handling successful return
          data = JSON.parse(data)
          console.log(data[0].score)
          score.attr('data-target',data[0].score)
          console.log(score.attr('data-target'))
          startScoreCount()
      })
      .catch(error => {
        score.text(error)
        console.log("is this called?")
      }); // if bad call
  }
}


function startScoreCount(){
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  counters.forEach(counter => {
    const updateCount = () => {
      const target = counter.getAttribute('data-target');
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;


      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();
  });
}