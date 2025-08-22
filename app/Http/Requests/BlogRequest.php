<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "user_id" => "required|exists:users,id",
            "category_id" => "required|exists:categories,id",
            "title" => "required|string|max:255",
            "description" => "required|string",
            "content" => "required|string",
            "images" => "nullable|array",
            "is_published" => "required|boolean",
        ];
    }

    protected function prepareForValidation()
    {
        if (empty($this->images)) {
            $this->merge([
                'images' => [['url' => 'images/my_image.jpeg']]
            ]);
        }
    }
}
