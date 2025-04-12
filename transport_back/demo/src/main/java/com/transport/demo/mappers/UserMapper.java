package com.transport.demo.mappers;

import com.transport.demo.Entity.User;
import com.transport.demo.dto.SignUpDto;
import com.transport.demo.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore= true)
    User signUpToUser(SignUpDto signUpDto);
}
