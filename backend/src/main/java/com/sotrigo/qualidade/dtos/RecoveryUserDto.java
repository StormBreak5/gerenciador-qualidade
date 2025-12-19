package com.sotrigo.qualidade.dtos;

import com.sotrigo.qualidade.models.Role;

import java.util.List;

public record RecoveryUserDto(
        Long id,
        String email,
        List<Role> roles
) {
}
