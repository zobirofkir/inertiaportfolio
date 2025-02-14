<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'slug'
    ];

    /**
     * Get the user that owns the tag
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The blogs that belong to the Tag
     *
     * @return BelongsToMany
     */
    public function blogs(): BelongsToMany
    {
        return $this->belongsToMany(Blog::class);
    }
}
