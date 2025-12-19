package com.sotrigo.qualidade.dtos;

import com.sotrigo.qualidade.models.enums.RoleName;

public record CreateUserDto(
        String email,
        String password,
        RoleName role
) {
}
