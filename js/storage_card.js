storage_grid_button.addEventListener('click', () => {
    storage_column_button.classList.remove('select');
    storage_grid_button.classList.add('select');
    storage_container.classList.replace('column_style', 'grid_style');
});

storage_column_button.addEventListener('click', () => {
    storage_grid_button.classList.remove('select');
    storage_column_button.classList.add('select');
    storage_container.classList.replace('grid_style', 'column_style');
});

bulkDel_button.addEventListener('click', () => {
    const allSelect = document.querySelectorAll('.tag-item.bulkDel');
    const del_list = [];

    allSelect.forEach(element => {
        
    })
})