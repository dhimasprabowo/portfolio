const app = Vue.createApp({
	data() {
		return {
			projects: [],      // portfolio projects
			showModal: false,  // image modal
			selectedImage: ""  // currently selected image
		};
	},
	methods: {
		openImage(img) {
			this.selectedImage = img;
			this.showModal = true;
		},
		closeImage() {
			this.showModal = false;
		}
	},
	mounted() {
		// Load portfolio JSON
		fetch("data/portfolio.json")
			.then(res => res.json())
			.then(data => {
				// Assign projects manually reversed in JSON
				this.projects = data.projects;
			})
			.catch(err => console.error("Failed to load portfolio:", err));

		// Parallax effect
		window.addEventListener("scroll", () => {
			const parallax = document.querySelector(".parallax-wrapper");
			if (parallax) {
				parallax.style.backgroundPositionY = window.scrollY * 0.5 + "px";
			}
		});
	}
});

app.mount("#app");
