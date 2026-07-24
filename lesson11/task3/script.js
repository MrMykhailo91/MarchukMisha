const gallery = [
	{
		image: "gory.png",
        
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
	{
		image: "gory.png",
	},
];
const randomIndex = Math.floor(Math.random() * gallery.length);
console.log(randomIndex);
console.log(gallery[randomIndex]);
document.getElementById("gallery-img").src = gallery[randomIndex].image;
