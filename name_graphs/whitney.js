(() => {
    /* Add data in an array of objects for each point */
    const data = [
        { 
            year: new Date(1982, 0, 1),
            popularity: 185,
        },
        { 
            year: new Date(1983, 0, 1),
            popularity: 164,
        },
        { 
            year: new Date(1984, 0, 1),
            popularity: 124,
        },
        { 
            year: new Date(1985, 0, 1),
            popularity: 73,
        },
        { 
            year: new Date(1986, 0, 1),
            popularity: 32,
        },
        { 
            year: new Date(1987, 0, 1),
            popularity: 32,
        },
        { 
            year: new Date(1988, 0, 1),
            popularity: 39,
        },
        { 
            year: new Date(1989, 0, 1),
            popularity: 57,
        },
        { 
            year: new Date(1990, 0, 1),
            popularity: 60,
        },
        { 
            year: new Date(1991, 0, 1),
            popularity: 68,
        },
        { 
            year: new Date(1992, 0, 1),
            popularity: 85,
        },
        { 
            year: new Date(1993, 0, 1),
            popularity: 82,
        },
        { 
            year: new Date(1994, 0, 1),
            popularity: 91,
        },
        { 
            year: new Date(1995, 0, 1),
            popularity: 115,
        },
    ];

    const drawChart = (chartData) => {
        const svgWidth = 700;
        const svgHeight = 600;

        // d3 margin convention
        const margin = {top: 20, right: 30, bottom: 60, left: 60};
        const width = svgWidth - margin.left - margin.right;
        const height = svgHeight - margin.top - margin.bottom;

        // Set num data points in the set
        const numDataPoints = 6;

        // X scale will use the index of our data
        const x = d3.scaleTime()
            .domain([new Date(1982, 0, 1), new Date(1995, 0, 1)]) // how many inputs are there?
            .range([0, width]); // what values can the input have?

        const y = d3.scaleLinear()
            .domain([d3.max(chartData, d => d.popularity), 30]).nice()
            .range([height, margin.top]);

        const xAxis = g => g
            .attr('transform', `translate(0, ${height})`)
            .attr('class', 'axis')
            .call(
                d3.axisBottom(x)
                .ticks(chartData.length)
            );

        const yAxis = g => g
            .attr('class', 'axis')
            .call(
                d3.axisLeft(y)
                .ticks(22)
            );

        const line = d3.line()
            .x((d) => x(d.year))
            .y((d) => y(d.popularity));

        const svg = d3.select('.js-d3-container')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        // Highlight rectangle
        const rectangle = svg.append("rect")
            .attr("x", x(new Date(1985, 0, 1)))
            .attr("y", 0 + margin.top)
            .attr("width", x(new Date(1984, 0, 1))) // how does this work?
            .attr("height", height - margin.top)
            .style('opacity', 0.5)
            .style('fill', '#2ecc9c');

        // Highlight rectangle
        const rectangleTwo = svg.append("rect")
            .attr("x", x(new Date(1991, 3, 1)))
            .attr("y", 0 + margin.top)
            .attr("width", x(new Date(1983, 3, 1))) // how does this work?
            .attr("height", height - margin.top)
            .style('opacity', 0.5)
            .style('fill', '#2ecc9c');

        // Add the data path
        svg.append('path')
            .attr('class', 'line')
            .attr('d', line(chartData));
            
        svg.append('g')
            .call(xAxis);
        svg.append('g')
            .call(yAxis);

        const tooltip = d3.select('body')
            .append('div')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .attr('class', 'value');

        // Dots
        // http://bl.ocks.org/d3noob/38744a17f9c0141bcd04
        svg.selectAll('dot')
            .data(chartData)
            .enter().append('circle')
            .attr('r', 6.5)
            .attr('cx', (d) => x(d.year))
            .attr('cy', (d) => y(d.popularity))
            .attr('class', 'dot')
            .on('mouseover', (d) => {
                tooltip.style('visibility', 'visible');
                tooltip.text(d.popularity)
            })
            .on('mousemove', () => {
                tooltip.style('top',`${d3.event.pageY - 10}` + 'px');
                tooltip.style('left', `${d3.event.pageX + 10}` + 'px');
            })
            .on('mouseout', () => tooltip.style('visibility', 'hidden'));

        // Labels
        // https://bl.ocks.org/d3noob/23e42c8f67210ac6c678db2cd07a747e
        svg.append('text')             
            .attr('transform',
            'translate(' + (width/2) + ' ,' + 
                           (height + margin.top + 20) + ')')
            .style('text-anchor', 'middle')
            .attr('class', 'label')
            .text('Year');

        svg.append('text')
          .attr('transform', 'rotate(-90)')
          .attr('y', 0 - margin.left)
          .attr('x',0 - (height / 2))
          .attr('dy', '1em')
          .style('text-anchor', 'middle')
          .classed('label', true)
          .text('Popularity ranking'); 

        // Title
        svg.append("text")
            .attr("class", "title")
            .attr("x", width / 2)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .text("Whitney");
    };
    
    drawChart(data);

})()