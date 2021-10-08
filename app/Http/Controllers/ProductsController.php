<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    public function index()
    {
        $products = Products::get();
        if (count($products) <= 0) {
            return response()->json('nenhum dado encontrado', 204);
        }
        return response()->json($products, 200);
    }

    public function store()
    {
        $product = new Products();
        $product->name = Str::random(40);
        $product->image = Str::random(45) .'.png';
        $product->save();

        return response()->json('salvo com sucesso', 201);
    }

    public function destroy($id)
    {
        $product = Products::find($id);

        if(!$product) {
            return response()->json([
                'message'   => 'Record not found',
            ], 404);
        }

        $product->delete();
        return response()->json('deletado com sucesso', 201);
    }

    public function truncate()
    {
        Products::truncate();
        $products = Products::get();
        if (count($products) <= 0) {
            return response()->json($products, 204);
        }
        return response()->json($products, 200);
        // return response()->json('Nossa, todos os registros foram deletados!', 201);
    }
}
