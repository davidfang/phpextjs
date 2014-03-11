<?php

class DefaultController extends Controller
{
    public $layout = '/layouts/main';
	public function actionIndex()
	{
		echo 'admin admin';
        $this->render('index');
	}
}