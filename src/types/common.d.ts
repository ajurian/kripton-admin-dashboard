type NonNullableField<T> = {
    [P in keyof T]: NonNullableField<NonNullable<T[P]>>;
};

type NonUndefinedField<T> = {
    [P in keyof T]-?: T[P];
};

type NonUndefined<T> = T extends undefined ? never : T;
