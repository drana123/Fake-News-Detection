const express = require("express"),
	  bodyParser = require("body-parser"),
	  mongoose = require("mongoose"),
	  app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/news", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var newsSchema = new mongoose.Schema({
	title: {type: String, required: true},
	image: String,
	content: {type: String, required: true},
	created: {type: Date, default: Date.now},
	source: String,
	status: String
});

var News = mongoose.model("News", newsSchema);

// News.create({
// 	title: "Nine Iranians held with 100 Kg Narcotics off Gujarat Coast",
// 	image: "http://164.100.117.97/WriteReadData/userfiles/image/image001T10A.jpg",
// 	content: "In a joint operation launched by Marine Task Force (MTF), Indian Coast Guard (ICG) and Anti-Terrorist Squad of Gujarat apprehended nine Iranian personnel along with 100 kilograms of narcotics off the coast of Gujarat on 26 March 2019. On 24 March 2019, inputs were received from ATS, Gujarat, regarding an illegal consignment of narcotic drug, heroin, likely to be smuggled in Gujarat through a Dhow ex-Iran. It also revealed that the consignment was loaded in Pakistan and destined for Gujarat. A team of ATS embarked Indian Coast Guard Ship for the mission while communication frequencies were constantly monitored by the ATS personnel. After extensive search of more than 24 hours, the suspicious Dhow was intercepted on 26 March 2019 by ICG ship off Gujarat coast. On being challenged the suspicious Dhow resorted to evasive tactics to avoid apprehension. On realising that apprehension by ICG was inevitable, the crew set the Dhow on fire to destroy the evidence. In a daring Joint Boarding Operation, the ICG and ATS team embarked the Dhow and apprehended nine Iranian crew alongwith recovery of 100 Kg of Heroine. The ICG ship thereafter, attempted to extinguish the fire on-board the Dhow however, due to presence of large quantity of fuel and few gas cylinders, the fire became uncontrollable and consequently the Dhow sank. The apprehended crew alongwith the consignment has been brought to Porbandar by Indian Coast Guard Ship and handed over to Marine Task Force (MTF), Gujarat AM 27 March 2019 for further action.",
// 		source: "PIB Delhi",
// 		status: "Real News"
// });



app.get("/", function(req, res){
	res.redirect("/news/new");
});

// INDEX
app.get("/news", function(req, res){
	News.find({}, function(err, news){
		if(err) {
			console.log(err);
		} else{
			res.render("index", {news: news});
		}
	})
});

// NEW
app.get("/news/new", function(req, res){
	res.render("new");
});

// CREATE ****
app.post("/news", function(req, res){
	News.create(req.body.news, function(err, newNews){
		if(err){
			console.log(err);
		} else{
			res.redirect("/news/" + newNews._id);
		}
	});
});

// SHOW
app.get("/news/:id", function(req, res){
	News.findById(req.params.id, function(err, foundNews){
		if(err){
			console.log(err);
		} else{
			res.render("show", {news: foundNews});
		}
	})
});

app.listen(3000, function(){
	console.log("Server is Running!")
});