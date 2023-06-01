<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "id" => ['required',
                Rule::exists('users', 'id')],
            "name" => 'nullable',
            "surname" => 'nullable',
            "username" =>[
                Rule::unique('users', 'username')->ignore($this->id)
            ]
        ];
    }
}
