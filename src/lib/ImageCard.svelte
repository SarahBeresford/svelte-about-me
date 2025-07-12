<!-- src/lib/ImageCard.svelte -->

<script>
    export let image;  // Image URL prop
    export let title;  // Title prop
    export let description;  // Description prop
  </script>
  
  <style>
    .card {
      background-color: #8594e4;
      border: 1px solid #8594e4;
      border-radius: 10px;
      overflow: hidden;
      width: 300px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin: 20px;
      text-align: center;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
  
    .card:hover {
    /* Styles applied on hover */
    background-color: steelblue;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px); /* Example: slight lift effect */
  }
    .card img {
      width: 100%;
      height: auto;
    }
  
    .card-content {
      padding: 15px;
    }
  
    .card-title {
    font-size: 1.5em;
    color: #fff;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    margin: 0 0 10px 0;
    }
  
    .card-description {
    font-size: 1em;
    color: #fff;
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    margin: 0;
    }
  </style>
  
  <div class="card">
    <img src={image} alt={title} />
    <div class="card-content">
      <h2 class="card-title">{title}</h2>
      <p class="card-description">{description}</p>
    </div>
  </div>
  