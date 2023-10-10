<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'usuario' => 'required|unique:usuarios,usuario',
            'senha' => 'required',
            'habilitado' => 'boolean',
            'idrol' => 'required|exists:rols,idrol',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $usuario = Usuario::create($request->all());

        return response()->json($usuario, 201);
    }


    public function show($id)
    {
        $usuario = Usuario::find($id);

        if (!$usuario) {
            return response()->json(['error' => 'Usuario nao encontrado'], 404);
        }

        return response()->json($usuario);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [

            'usuario' => 'unique:usuarios,usuario,' . $id,
            'habilitado' => 'boolean',
            'senha',
            'idrol' => 'exists:rols,idrol',
            'idpersona'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $usuario = Usuario::findOrFail($id);
        $usuario->update($request->all());

        return response()->json($usuario, 200);
    }

    //Register Function
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'usuario' => 'unique:usuarios,usuario',
            'senha' => 'required',
            'habilitado' => 'boolean',
            'idrol' => 'exists:rols,idrol',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        try {
            DB::beginTransaction();

            $usuario = new Usuario();
            $usuario->usuario = $request->input('usuario');
            $usuario->senha = $request->input('senha');
            $usuario->habilitado = $request->input('habilitado');
            $usuario->idrol = $request->input('idrol');
            $usuario->save();

            $persona = new Persona([
                'user' => $request->input('usuario'),

            ]);

            if ($request->filled('usuario')) {
                $persona->save();
                $usuario->idpersona = $persona->id;
                $usuario->save();
            }

            DB::commit();

            return response()->json(['message' => 'Usuario registrado com éxito', 'usuario' => $usuario, 'Persona' => $persona], 201);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error' => 'Error al registrar usuario']);
        }
    }

    public function login(Request $request)
    {

        $auth = Usuario::where('usuario', $request->usuario)->where('senha', $request->senha)->first();

        if (!$auth) {
            return response()->json(['error' => 'Credenciais incorrectas'], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Iniciou a sessão',
            'token' => 'token de autenticação',
            'idrol' => $auth->idrol,
            'usuario' => $auth,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();

        return response()->json(['message' => 'Usuário excluído com sucesso'], 200);
    }
}
