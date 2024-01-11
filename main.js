window.onload = function() {
    var container = document.querySelector('.container')
    var graph = document.querySelector('.graph')
    var lines_x = document.getElementsByClassName('lines_x')
    var lines_y = document.getElementsByClassName('lines_y')
    var points_container = document.querySelector('.points_def_container')
    var prad_buttons = document.getElementsByClassName('prad_button')
    var graph_background = document.querySelector('.graph_background')
    var line_color = document.querySelector('.line_color')
    var number_of_rows_inp = document.getElementById('number_of_rows_inp')
    var number_of_col_inp = document.getElementById('number_of_col_inp')
    var points = document.getElementsByClassName('point')
    var point_defs = document.getElementsByClassName('point_def')
    var active = document.getElementsByClassName('active')
    var x = document.getElementsByClassName('x')
    var y = document.getElementsByClassName('y')
    var color = document.getElementsByClassName('color')

    var point_state = []

    var max_number_of_points = 60

    var container_width = 100
    var container_height = 100

    var graph_width = (70/100) * container_width
    var graph_height = (90/100) * container_height

    var number_of_rows = 20
    var number_of_columns = 20

    var point = '<div class="point"></div>'

    for (let i = 0; i < prad_buttons.length; i++) {
        prad_buttons[i].addEventListener('mousedown', e => {
            prad_buttons[i].style.background = "rgb(240, 240, 240)"
        })

        prad_buttons[i].addEventListener('mouseup', e => {
            prad_buttons[i].style.background = "rgb(221, 221, 221)"
        })

        prad_buttons[i].addEventListener('mouseout', e => {
            prad_buttons[i].style.background = "rgb(240, 240, 240)"
        })

        prad_buttons[i].addEventListener('mouseenter', e => {
            prad_buttons[i].style.background = "rgb(221, 221, 221)"
        })
    }

    function def_lines_y() {
        if (number_of_columns > max_number_of_points) {
            number_of_columns = max_number_of_points
            alert("Maximum number reached")
        }    
        var spacing_x = container_width / number_of_columns
        var curr_space_x = 0
        place_columns(number_of_columns, spacing_x, curr_space_x, lines_y)
    }

    function def_lines_x() {
        if (number_of_rows > max_number_of_points) {
            number_of_rows = max_number_of_points
            alert("Maximum number reached")
        }
        var spacing_y = container_height / number_of_rows
        var curr_space_y = 0
        place_rows(number_of_rows, spacing_y, curr_space_y, lines_x)
    }

    container.style.height = container_height + "%"
    container.style.width = container_width + "%"

    graph.style.height = graph_height + "%"
    graph.style.width = graph_width + "%"

    function place_columns(number_of_columns, spacing_x, curr_space_x, lines_y) {
        for (let i = 0; i < number_of_columns; i++) {
            graph.innerHTML += "<div class='lines_y'></div>"
            lines_y[i].style.left = curr_space_x + "%"
            curr_space_x += spacing_x
        }
    }

    function place_rows(number_of_rows, spacing_y, curr_space_y, lines_x) {
        for (let i = 0; i < number_of_rows; i++) {
            graph.innerHTML += "<div class='lines_x'></div>"
            lines_x[i].style.top = curr_space_y + "%"
            curr_space_y += spacing_y
        }
    }

    def_lines_x()
    def_lines_y()

        /*prad_buttons[1].addEventListener('click', e => {
            points_container.innerHTML += '<div class="point_def">' +
            '<p class="point_name">Point '+ point_number +'</p>' +
            '<label>X<input value="0" type="number" class="x">________</label>' +
            '<label>Y<input value="0" type="number" class="y">_______</label>' +
            '<label>Color<input type="color" class="color"></label>' +
            '</div>'
            point_number++
            graph.innerHTML += point
            console.log(x_coord)
        })
        this code above here was basically supposed to add a point in click but it's giving me some bugs that are above me so I'm trying a new way
        4 164 65*/

        for (let i = 0; i < max_number_of_points; i++) {
            points_container.innerHTML += '<div class="point_def">' +
            '<p class="point_name">Point '+ (i + 1) +'</p>' +
            '<label>X<input min="0" max"60" disabled="disabled" value="0" type="number" class="x">______</label>' +
            '<label>Y<input min="0" max"60" disabled="disabled" value="0" type="number" class="y">_______</label>' +
            '<label>Color<input disabled="disabled" type="color" class="color"></label>' +
            '<input type="checkbox" class="active">' +
            '</div>'
            graph.innerHTML += point
        }

        for (let i = 0; i < max_number_of_points; i++) {
                active[i].value = false
                point_state[i] = active[i].value
                active[i].addEventListener('change', e => {
                    if (point_state[i] === true) {
                        point_state[i] = false
                        point_defs[i].style.opacity = 0.5
                        x[i].disabled = "disabled"
                        y[i].disabled = "disabled"
                        color[i].disabled = "disabled"
                        points[i].style.display = "none"
                        console.log(point_state)
                    }else{
                        point_state[i] = true
                        point_defs[i].style.opacity = 1
                        x[i].disabled = ""
                        y[i].disabled = ""
                        color[i].disabled = ""
                        points[i].style.display = "block"
                        console.log(point_state)
                    }
            })
        }

        for (let i = 0; i < max_number_of_points; i++) {
            x[i].addEventListener('change', e => {
                if (x[i].value > max_number_of_points) {
                    alert('Maximum number reached')
                    x[i].value = max_number_of_points
                }
                points[i].style.left = ((x[i].value / number_of_columns) * 100) - 0.4 + "%"
            })
            y[i].addEventListener('change', e => {
                if (y[i].value > max_number_of_points) {
                    alert('Maximum number reached')
                    y[i].value = max_number_of_points
                }
                points[i].style.top = ((y[i].value / number_of_rows) * 100) - 0.8 + "%"
            })
            color[i].addEventListener('change', e => {
                points[i].style.background = color[i].value
            })

            line_color.addEventListener('change', e => {
                lines_x[i].style.background = line_color.value
                lines_y[i].style.background = line_color.value
            })
        }

        graph.style.background = "rgb(4, 164, 65)"
        graph_background.value = "#04a441"
        graph_background.addEventListener('change', e => {
            graph.style.background = graph_background.value
        })

        number_of_col_inp.addEventListener('change', e => {
            if (number_of_col_inp.value !== 30) {
                number_of_columns = number_of_col_inp.value
                def_lines_y()
            }else{
                number_of_col_inp = 30
                number_of_columns = 30
                def_lines_y()
            }
        })

        number_of_rows_inp.addEventListener('change', e => {
            if (number_of_rows_inp.value !== 30) {
                number_of_rows = number_of_rows_inp.value
                def_lines_x()
            }else{
                alert("Maximum number of rows reached")
                number_of_rows = 30
                number_of_rows_inp.value = 30
                def_lines_x()
            }
        })


}