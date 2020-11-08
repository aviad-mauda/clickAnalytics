<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

Use App\Models\ClickedUser;

class ClickedUserController extends Controller
{
    public function index()
    {
        return ClickedUser::all();
    }

    public function store(Request $request)
    {
        $user = ClickedUser::create($request->all());

        return response()->json($user, 201);
    }
    
}
