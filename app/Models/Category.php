<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'slug'
    ];

    /**
     * Get the user that owns the category.
     *
     * @return BelongsTo
     */
    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get all of the blogs for the category.
     *
     * @return HasMany
     */
    public function blogs() : HasMany
    {
        return $this->hasMany(Blog::class);
    }
}
