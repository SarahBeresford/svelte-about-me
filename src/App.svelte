<script>
    import ImageCard from "./lib/ImageCard.svelte";
  
  let cardData = [
    {
      image:
        "https://i.cbc.ca/1.7583785.1752338020!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/iga-swiatek.jpg?im=Resize%3D780",
      title: "Sports",
      description:
        "My favorite tennis player, Iga Swiatek, won Wimbledon TODAY (July 12, 2025)!",
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/0/03/Prideandprejudiceposter.jpg",
      title: "Movies",
      description: "Romance, Comedy, Drama, anything really——just not horror!",
    },
    {
      image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/67e940b7-aab2-46ce-a62b-c7308cde9de7/e4a851d9-1592-11f0-893b-129dcf998215?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      title: "TV Shows",
      description:
        "Hacks is my favorite right now! SO funny but tugs on your heart strings when necessary",
    },
  ];
  let name = "Sarah Beresford"; // Change this to your name
  let bio = "I am a freshman computer science student at CUNY Bronx Community College and an aspiring bioinformatician!";
  let hobbies = ["Crocheting", "Reading", "Running"]; // List some hobbies
</script>

<style>
:global(body){
  background-color: #6643b5;
}
  h1 {
    color: #d5def5;
    font-family: "Libertinus Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }
  .container {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    text-align: center;
    font-family: "Libertinus Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }
  .hobbies {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    font-family: "Libertinus Mono", monospace;
    font-weight: 1000;
    font-style: normal;
  }
  .hobby {
    background-color: #430f58;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
  }

  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  h2{
    color: #fff;
    font-family: "Libertinus Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }

</style>

<div class="container">
  <h1>About Me</h1>
  <p>Hello, my name is <strong>{name}</strong>!</p>
  <p>{bio}</p>

  <h2>My Hobbies</h2>
  <div class="hobbies">
    {#each hobbies as hobby}
      <div class="hobby">{hobby}</div>
    {/each}
  </div>
</div>


<h2>My Favorite Things to Watch!</h2>
<div class="card-container">
  {#each cardData as { image, title, description }}
    <ImageCard {image} {title} {description} />
  {/each}
</div>


