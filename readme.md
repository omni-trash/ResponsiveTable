# Responsive Table

what a mess

## Conclusion

U can use HTML tables as well but u shouldn't use the default table display properties for modern design on mobile devices, except `display: table-cell` to align some stuff vertical.

Better use some `div` elements with classes (`table`, `row`, `cell`) and then layout them with flexbox or grid.

In most cases flexbox will be a good choice to make tables responsive. If u want to define the positon of cells for different resolutions, u should use a grid layout.

