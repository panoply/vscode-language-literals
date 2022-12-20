js`

  const foo = 'bar';


`;


ts`

  const foo: string = 'bar';

  function (prop: string[]) {


  }

`;

json`
{
  "foo": "bar"
}

`

jsonc`
{
  // comment
  "foo": "bar"
}

`

yaml`

foo: 'bar'
arr:
  - one
  - two

`
html`<div>`

html`

<div>

</div>

`;

css`

.class {
  color: black;
}

`;


scss`

$var:  #111;

.class {
  color: $var;

  .class {
    background: #111;
  }
}

`;
