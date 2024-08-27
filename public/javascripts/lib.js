function generateArrayOfYears() {
    var max = new Date().getFullYear()
    var min = max - 9
    var years = []
  
    for (var i = max; i >= min; i--) {
      years.push(i)
    }
    return years
  }

//   The same logic can be written in two lines of javascript.

// “`
const year = new Date().getFullYear();
const years = Array.from(new Array(10), (v, idx) => year + idx);
// “`
// Then if you were using react, you might want to return these years formatted as “ in a select list with JSX like this:

// “`
const yearOpts = years.map((year) => {
return (

{year}

);
});

this.years = function(startYear) {
    var currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}
 
console.log( this.years(2019-20));

const currentYear = (new Date()).getFullYear();
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
console.log(range(currentYear, currentYear - 50, -1)); 
// [2019, 2018, 2017, 2016, ..., 1969]

// Simple and gets the job done. – 
Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i);
new Date().getFullYear()
