<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Gate;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'usuario' => 'required|unique:usuarios,usuario',
            'senha' => 'required',
            'habilitado' => 'boolean',
            'idrol' => 'required|exists:rols,idrol',
        ]);

        $usuario = new Usuario();
        $usuario->usuario = $request->input('usuario');
        $usuario->senha = $request->input('senha');
        $usuario->habilitado = $request->input('habilitado');
        $usuario->idrol = $request->input('idrol');
        $usuario->save();

        return response()->json(['message' => 'Usuário registrado com sucesso']);
    }

    public function login(Request $request)
{
    $credentials = $request->only('usuario', 'senha');

    if (Auth::attempt($credentials)) {
        return response()->json(['success' => true, 'usuario' => Auth::user()]);
    } else {
        return response()->json(['success' => false, 'message' => 'Credenciais inválidas'], 401);
    }
}

public function destroy($id)
{
    // Verifique as permissões aqui
    if (Gate::allows('delete-user', Usuario::class)) {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(['message' => 'Usuário excluído com sucesso'], 200);
    } else {
        return response()->json(['error' => 'Você não tem permissão para excluir usuários'], 403);
    }
}

}
