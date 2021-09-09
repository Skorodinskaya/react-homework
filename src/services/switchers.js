export let switcher_menu = () => {
    let app = document.getElementsByClassName('App') [0]
    app.classList.toggle('App_light')

    let menu_elements = document.getElementsByClassName('menu_element')
    for (const menu_element of menu_elements) {
        menu_element.classList.toggle('menu_element_light')
    }
    let switcher_buttons = document.getElementsByClassName('switcher')
    for (const switcherButton of switcher_buttons) {
        switcherButton && switcherButton.classList.toggle('switcher_light')
    }
}