# Fake-News-Detection
This application tells the authenticity of a news. 
User provides some news with details of title, content and source of news.
The algorithm uses 5 different layers to test the news on a number of parameters.
Each layers gives it a score based on the weightage of that layers and after passing all the layers the final score is calculated.
If the calculated score crosses the threshold value for a given category of news, then it is classified as real else it is a Fake News.
The details of the five layers are as follows:

1. Checks for punctuation errors and grammatical errors in the content.

2. Performs a google reverse image search to look for older news content copying.

3. Verfies the news with offcial government reports and data published.

4. Looks for any biased/defaming news towards somebody.

5. A simple vote on each news indicating the opinion of people.

Below are the the scrennshots of the website.

Screenshot 1.
This is the Startup Page of the form to enter the data:

<img width="960" alt="ui" src="https://user-images.githubusercontent.com/48748119/95014118-58203700-0662-11eb-9da1-58057b4eb986.png">

Screenshot 2.
Enter the data in the given fields.

<img width="960" alt="UI filled" src="https://user-images.githubusercontent.com/48748119/95014151-adf4df00-0662-11eb-8b5b-04b15018c26a.png">

Screenshot 3.
These are the result of the given news.

Result: Fake

<img width="960" alt="result" src="https://user-images.githubusercontent.com/48748119/95014182-d7156f80-0662-11eb-9cb0-6cf05c8aeb95.png">


Result: True

<img width="960" alt="true result" src="https://user-images.githubusercontent.com/48748119/95014192-eb596c80-0662-11eb-9455-57b607598563.png">

Screenshot 4.
All the previously done classifications.

<img width="960" alt="all class" src="https://user-images.githubusercontent.com/48748119/95014207-075d0e00-0663-11eb-9dc3-e148b0b5cff6.png">


