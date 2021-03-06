// Create a class here
// =====================================
class Episode {
    constructor(title, duration, minutesWatched) {
      this.title = title;
      this.duration = duration;
      // Add logic here
      // ======================
      
      if (minutesWatched === 0) {
        this.watchedText = 'Not yet watched';
        this.continueWatching = false;
      } else if (minutesWatched > 0 && minutesWatched < duration) {
        this.watchedText = 'Watching';
        this.continueWatching = true;
      } else if (minutesWatched === duration) {
        this.watchedText = 'Watched';
        this.continueWatching = false;
      }
      
      // ======================
    }
  }
  let firstEpisode = new Episode('Dark Beginnings', 45, 45);
  let secondEpisode = new Episode('The Mystery Continues', 45, 10);
  let thirdEpisode = new Episode('An Unexpected Climax', 60, 0);

// =====================================

/*
document.querySelector('#first-episode-info').innerText = `Episode: ${firstEpisode.title}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#second-episode-info').innerText = `Episode: ${secondEpisode.title}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#third-episode-info').innerText = `Episode: ${thirdEpisode.title}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;
*/

// Modify the array here
// ====================================

let episodes = [];
episodes.push(firstEpisode, secondEpisode, thirdEpisode, thirdEpisode);

episodes.pop();

let numberOfEpisodes = episodes.length;

// ====================================

const body = document.querySelector('body');

document.querySelector('#episodes').innerText = numberOfEpisodes;

for(let episode of episodes) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');
  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';
  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.watchedText}` ;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  if (episode.continueWatching) {
    let newButton = document.createElement('button');
    newButton.innerText = 'Continue watching';
    newParagraph.append(newButton);
  }
  body.append(newDiv);
}
  