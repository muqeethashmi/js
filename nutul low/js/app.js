const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const framework = document.querySelector('#framework');

btnAdd.onclick = (e) => {
  e.preventDefault();

  if (framework.value == '') {
    alert('Please enter the name.');
    return;
  }
  const option = new Option(framework.value, framework.value);
  listbox.add(option, undefined);

  framework.value = '';
  framework.focus();
};

btnRemove.onclick = (e) => {
  e.preventDefault();
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
};
