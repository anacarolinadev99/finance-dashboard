//Transforma um valor em centavos BRL
export const convertToCents = (value) => Math.round(value * 100);

//Valida se o valor é valido ou tranforma em 0
export const validateValue = (value) => {
    let finalValue = Number(String(value).trim().replaceAll(',', '.'));
    if (isNaN(finalValue) || finalValue < 0) finalValue = 0;
    return finalValue;
};

//Converte os centavos em reais brasileiros
export const convertCentsToBRL = (value) => value / 100;

//Converte o valor em reais brasileiros para exibição
export const convertValueToBRLString = (value) =>
    convertCentsToBRL(value).toLocaleString('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

//Valida o campo descrição do formulario
export const validateForm = (data, type) => {
    //Regex para validar descrição
    const regexDescription = /^[\p{L}0-9 ]{1,25}$/u;
    const regexDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    switch (type) {
        case 'date':
            if (!data) return 'Por favor preencha este campo';

            if (!regexDate.test(data)) return 'Insira uma data válida';

            return null;

        case 'description':
            if (!data?.trim()) return 'Por favor preencha este campo';

            if (!regexDescription.test(data))
                return 'Insira uma descrição válida, sem caracteres especiais, max 25.';

            return null;

        case 'type':
            if (!data) return 'Por favor preencha este campo';
            return null;

        case 'value':
            if (!data || Number(data) <= 0 || isNaN(Number(data)))
                return 'Por favor insira um saldo válido';
            return null;

        default:
            return null;
    }
};
