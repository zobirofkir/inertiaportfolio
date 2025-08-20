<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get all of the user's blogs.
     *
     * @return HasMany
     */
    public function blogs() : HasMany
    {
        return $this->hasMany(Blog::class);
    }

    /**
     * Get all of the user's tags.
     *
     * @return BelongsToMany
     */
    public function tags() : BelongsToMany
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Get all of the user's categories.
     *
     * @return HasMany
     */
    public function categories() : HasMany
    {
        return $this->hasMany(Category::class);
    }

    /**
     * Get all of the user's projects.
     *
     * @return HasMany
     */
    public function projects() : HasMany
    {
        return $this->hasMany(Project::class);
    }

    /**
     * Generate Passport AccessTokens for the user.
     */
    public function accessToken() : string
    {
        return $this->createToken('accessToken')->accessToken;
    }
}
