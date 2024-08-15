﻿using System.ComponentModel.DataAnnotations;

namespace CustomerService.Dtos
{
    public class CustomerCreateDTO
    {
        public string Name { get; set; } = null!;

        public string Email { get; set; } = null!;

        public string? Address { get; set; }

        public string Phone { get; set; } = null!;

        public string? Gender { get; set; }

        public DateOnly? Birthdate { get; set; }

        public string? Password { get; set; }

        public string? Token { get; set; }

        public DateOnly? CreatedDate { get; set; }

        public string? Status { get; set; }
       
    }
}
