# Beneficial-Quotes
This is a repository of beneficial quotes in JSON format!

## Example

```javascript
{
  "1": {"quote":"Talk is cheap. Show me the code.",
  "author":"Linus Torvalds"},
  "2": {"quote":"Walking on water and developing software from a specification are easy if both are frozen.",
  "author":"Edward Berard"},
  "3": {"quote":"How you look at it is pretty much how you'll see it",
  "author":"Rasheed Ogunlaru"},
  "4": {"quote":"I'm not a great programmer; I'm just a good programmer with great habits.",
  "author":"Kent Beck"},
  "5": {"quote":"Truth can only be found in one place: the code.",
  "author":"Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship"},
  "6": {"quote":"A language that doesn't affect the way you think about programming is not worth knowing.",
  "author":"Alan J. Perlis"}
}
```

Here the JSON has a nested objects with the `variables` as follows:
- Object
  - Object.[1]:
    - Object.[1].quote
    - Object.[1].author
  - Object.2:
    - Object.[2].quote
    - Object.[2].author

After fetching the file you can access the variables by:

#### jQuery Example:
```javascript
    $.getJSON("https://raw.githubusercontent.com/fislamcsr/beneficial-quotes/master/IT-Quotes.json", function(json) {
    $(".quote-text").html(json.[1].quote); // used numbers for easy iteration
    $(".quote-author").html(json.[1].author); // as 1 is not allowed as a variable name, need to use [].
    });
```

an example quote:
  >Talk is cheap. Show me the code.
  >-Linus Torvalds
