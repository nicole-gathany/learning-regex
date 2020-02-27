function convertHTML(str) {
  // &colon;&rpar;

  const htmlChanges = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/[&<>"']/g, match => htmlChanges[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Dolce & Gabbana")); //should return Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); //should return Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")); //should return Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); //should return Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")); //should return Schindler&apos;s List.
console.log(convertHTML("<>")); //should return &lt;&gt;.
console.log(convertHTML("abc")); //should return abc.
