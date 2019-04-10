---
layout: post
title: "Where Everybody Knows Your Name"
date: 2019-01-20
description: What is the impact of pop culture phenomena on name popularity?
status: inprogress 
---
I recently added a golden retriever puppy to my modest collection of pets. Living in a dog-friendly city in a pets-OK building, the two of us have been meeting lots of canines on our frequent trips outside. We saw a Great Dane named Kingsley who seems almost as tall as me. We met one Frenchie named Pierre and another named Rigatoni. My dog, Remy, seems particularly excited when he runs into a goldendoodle named Phoebe who lives in our building. Maybe he senses their slight genetic connection.

I couldn't tell you the names of any of the humans I've met, but I try to remember the names of the dogs. As someone who goes through an annual *Friends* rewatch, hearing Phoebe's dad call her Pheebs sounded natural. I then wondered how the show contributed to the name's popularity. Before Ms. Buffay, how common was Phoebe?

### Unscientific methodology

I decided to look a little further, identifying a few names along with Phoebe that I theorized could have experienced notable changes in popularity based on what was going on in pop culture.

For my investigation, I searched [Social Security's baby name data](https://www.ssa.gov/oact/babynames/), which keeps track of the top 1000 names registed for girls and boys. Each data point displays the name's ranking out of 1000 for the corresponding year. In the case where the name did not crack the top 1000 for the year, the data point is excluded.

After collecting the data points, I used d3.js to create line graphs to better visualize my findings. In order to visually communicate changes in popularity, I reversed the direction of the y-axis. 1000 is at the bottom, while 1 is at the top. Hovering over any data point displays its exact ranking for that year.

I make no claims at statistical significance. These charts are purely anecdata from which you are welcome to jump to any conclusions, just like I did.

### I'll Be There For You
No show encapsulates the 90s like *Friends*. It was a theme song. It was a haircut. It was a quirky capuchin money and a long list of catchphrases. Nearly three decades later, the show is still so popular that [Netflix spent $100 million just to keep it for one more year](https://www.nytimes.com/2018/12/04/business/media/netflix-friends.html), ensuring that *Friends* and its perpetual fan base will never be on a break.

Of the core six friends, four of them have names too common to be able to correlate to jumps on the name popularity rankings: Rachel, Ross, Joey, and Monica. While the actors playing them became massive celebrities, they also have names too everyday to take into consideration. Phoebe and Chandler, however, are perfect candidates.

Let's start with Phoebe, who inspired my research in the first place. The name is hardly an old one, its origin dating back to [ancient Greek philosophy](https://en.wikipedia.org/wiki/Phoebe_(given_name)). Before it entered the common vocabulary through *Friends*, however, I suspected that few new parents would have thought to choose this name. As my sister pointed out, the exception may have been insufferable literary types who also named their sons Holden and Seymour and their other daughter Zooey.

*Friends* first came onto the air in fall 1994 and ended in spring 2003. From the jump, it was massively successful, remaining in the top 10 in the rankings throughout its run. In order to see how the show's run could have impacted the name Phoebe's popularity, I took data from the five years leading up to the show's premiere, as well as from the six years following its final season to see if there was any lasting impact. The portion of the graph highlighted represents the show's run, when I expected to see a jump in Phoebe's popularity.

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/phoebe.html" allowfullscreen></iframe>

As I suspected, the name Phoebe underwent a massive surge in popularity after *Friends* started. Between 1994 and 1995 alone, the name jumped over 200 places, from 819/1000 in 1994 to 581/1000 in 1995. During the show's run, Phoebe peaked at 388 in 2000. Interestingly, the name's popularity continued to grow even after *Friends* officially went off the air, holding steady in the 300s in the years that followed.

From this first chart, I'll draw my first conclusion:

* A name that becomes popular will tend to stay popular

Now let's take a look at Chandler, a much less common name. Unlike Phoebe, the given name Chandler does not have any strong historical origins. [Wikipedia](https://en.wikipedia.org/wiki/Chandlery) suggests that it may have come from the name for the person in charge of the candle and wax room in medieval times- so basically, some of the world's first Instagram influencers.

As with Phoebe, the chart will highlight the years when *Friends* was on the air. Here are the rankings for the name Chandler for males:

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/chandler_m.html" allowfullscreen></iframe>

A few interesting points jump out at me from this chart. Much like Phoebe, Chandler seems to have underwent a definite surge during the peak *Friends* years, peaking at 151/1000 in 1999. Surprisingly, the name was already relatively popular before we even got to know Mr. Bing and all his sarcastic self-loathing, floating just above the 500-mark in the late 80s and early 90s.

After *Friends* said its goodbyes, however, the popularity of Chandler seems to have waned, unlike the prolonged longevity of Phoebe.

As a more gender netural name, I also wanted to take a look at the rankings of Chandler for females. For those who have seen the show, it's a joke that writes itself.

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/chandler_f.html" allowfullscreen></iframe>

The name didn't even appear in the rankings until 1992, but then saw a modest jump during the *Friends* years. After bottoming out at 982 in 2002, the name fell off of the top 1000 in the year before the series finale.

The graphs seem to suggest that a more niche name like Chandler will not enjoy the same longevity as an established name like Phoebe after its pop culture moment has passed. How do all of those 90s babies named Chandler feeling today? Are their parents feeling a bit of buyer's remorse for having given them a name that so blatantly identifies as having being born during the Clinton administration?

From what we've seen with Chandler for males and females, I will add my second conclusion:

* Highly unique names are less likely to maintain their popularity.

### I Know Her

After *Friends*, I decided to move beyond TV. What happens to the naming statistics when a famous person suddenly jumps into the public sphere, such as a new musical artist who releases a hit first album?

Mariah Carey has been everything for almost two decades. While the rest of us slobs have succumbed to the throes of aging, Mariah still looks so flawless that it would be unsurprising to find out there is a portrait hiding in the back of that unforgettable *Cribs* closet.

The origin of the name Mariah surprised me. [The name seems to come from an anglicization of Maria](https://en.wikipedia.org/wiki/Mariah_(given_name)). Given that information, I would expect that the name was seldom given before the apparently-ageless superstar Mariah Carey burst onto the airwaves.

Unlike a TV show, I wanted to highlight a briefer window of time to examine the popularity surge attributed to a music star. For Mariah, I took a look at the two years before the release of her debut album in 1990 as the starting benchmark. After that, I highlighted the 1990-1993 period that spanned the releases of her self-titled first album and the aforementioned *Fantasy*. After that, I took data for the years that followed, making a conscious stop at the year when *Glitter* was released for obvious reasons, For a massive celebrity like Mariah, I hypothesized that, much like Phoebe, the name would continue to stay popular after it entered common knowledge. 

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/mariah.html" allowfullscreen></iframe>

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/whitney.html" allowfullscreen></iframe>

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/rose.html" allowfullscreen></iframe>

<iframe width="1000" height="700" class="graph-iframe" src="../../name_graphs/celine.html" allowfullscreen></iframe>
