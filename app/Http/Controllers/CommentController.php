<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Services\Facades\CommentFacade;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return CommentFacade::index();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CommentRequest $request
     * @param int $blogId
     */
    public function store(CommentRequest $request, $blogId)
    {
        return CommentFacade::store($request, $blogId);
    }
}
