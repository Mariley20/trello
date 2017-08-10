function editable(){
	var tag_p = document.createElement('p');
	var tag_button = document.createElement('button');
	var content = document.createTextNode('Añadir');
	tag_button.setAttribute('onclick', 'addTarea()');

	var tag_buttonCancelar = document.createElement('button');
	var contentCancelar = document.createTextNode('X')

	tag_button.appendChild(content);
	tag_buttonCancelar.appendChild(contentCancelar);

	tag_p.appendChild(tag_button);
	tag_p.appendChild(tag_buttonCancelar);

	document.getElementById('listaTarea').appendChild(tag_p);
}
var contadorTargetas = 0;
var contadorTareas = 0;
function addTarea(){
	tareaTitle = document.getElementById('tarea').value;
	var tag_div = document.createElement('div');

	//title de la tarea
	var tag_p = document.createElement('p');
	tag_p.appendChild(document.createTextNode(tareaTitle));
	tag_div.appendChild(tag_p);

	//agregar targeta
	
	var tag_div2 = document.createElement('div');
	
	var tag_p = document.createElement('p');
	tag_p.setAttribute('id', 'contadorTargetas');
	tag_p.setAttribute('onclick', 'targetaTextArea(this)')
	tag_p.appendChild(document.createTextNode('añadir Targeta'))
	tag_div2.appendChild(tag_p);

	document.getElementById('targeta').appendChild(tag_div);
	document.getElementById('targeta').appendChild(tag_div2);
	contadorTargetas++;
}

function targetaTextArea(e){
	//var ids = document.getElementById('contadorTargetas'); //etiqueta div
	e.setAttribute('hidden', 'true');

	//var id_Ul = document.getElementById('listaTargetas');
	var tag_p = document.createElement('p'); 
	var tag_area = document.createElement('textArea');
	tag_area.setAttribute( 'rows', "4" );
	tag_area.setAttribute('cols', "50");
	tag_p.appendChild(tag_area);

	tag_p.appendChild(document.createElement('br'));

	var tag_button = document.createElement('button');
	var content = document.createTextNode('Añadir');
	tag_button.setAttribute('onclick', 'addTargeta(this)');

	var tag_buttonCancelar = document.createElement('button');
	var contentCancelar = document.createTextNode('X')

	tag_button.appendChild(content);
	tag_buttonCancelar.appendChild(contentCancelar);
	tag_p.appendChild(tag_button);
	tag_p.appendChild(tag_buttonCancelar);
	(e.parentNode).appendChild(tag_p);

}
function addTargeta(e){
	console.log("entro");
	var padre = e.parentNode;
	(e.nextSibling).setAttribute('hidden', 'true');
	targetaTextArea(e)
}