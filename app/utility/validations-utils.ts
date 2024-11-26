import { ErrorTextFileds, FormDataSetter } from "../types";

const validationDelete = (name: string | undefined, notAllowedRegex: RegExp, errors: ErrorTextFileds) => {
    if (!name || notAllowedRegex.test(name)) {
        errors.errName = "Username not provided or Containig unsuporetd charachters like (\", \', \` \`)"
    }
    return errors
}

const validationCreate = (data: FormDataSetter, notAllowedRegex: RegExp, errNum: string, errors: ErrorTextFileds) => {
    if (!data.name || notAllowedRegex.test(data.name)) {
        errors.errName = "Username not provided or Containig unsuporetd charachters like (\", \', \` \`)"
    }

    if (IsInt(data?.likes?.toString().trim(), 0) === undefined) {
        errors.errLikes = errNum
    }

    if (IsInt(data?.photos?.toString().trim(), 0) === undefined) {
        errors.errPhotos = errNum
    }

    if (IsInt(data?.subs?.toString().trim(), 0) === undefined) {
        errors.errSubs = errNum
    }

    return errors
}

const validationUpdate = (data: FormDataSetter, notAllowedRegex: RegExp, errNum: string, errors: ErrorTextFileds) => {

    if (!data.name || notAllowedRegex.test(data.name)) {
        errors.errName = "Username not provided or Containig unsuporetd charachters like (\", \', \` \`)"
    }

    if (!data.nameNew || notAllowedRegex.test(data.nameNew)) {
        errors.errNameNew = "Username not provided or Containig unsuporetd charachters like (\", \', \` \`)"
    }

    if (IsInt(data?.likes?.toString().trim(), 0) === undefined) {
        errors.errLikes = errNum
    }

    if (IsInt(data?.photos?.toString().trim(), 0) === undefined) {
        errors.errPhotos = errNum
    }

    if (IsInt(data?.subs?.toString().trim(), 0) === undefined) {
        errors.errSubs = errNum
    }

    return errors
}

export const validationFormData = (data: FormDataSetter): ErrorTextFileds => {
    const errNum = "Invalid input, expected a non-negative number"
    const notAllowedRegex = /["'`\s]/
    const errors: ErrorTextFileds = {
        errOperation: undefined,
        errLikes: undefined,
        errNameNew: undefined,
        errName: undefined,
        errPhotos: undefined,
        errSubs: undefined
    }

    if (!data.operation || !(data.operation && ["DELETE", "GET", "UPDATE", "CREATE"].includes(data.operation))) {
        errors.errOperation = "Type operation which you want use (DELETE, GET, UPDATE, CREATE)"
    }

    switch (data.operation) {
        case "CREATE": return validationCreate(data, notAllowedRegex, errNum, errors)
        case "UPDATE": return validationUpdate(data, notAllowedRegex, errNum, errors)
        case "DELETE": return validationDelete(data.name, notAllowedRegex, errors)
        default: return errors
    }

}

const ParseIntReliable = (numArg: string | undefined) => {
    if (numArg && numArg.length >= 0) {
        const parsed = Number.parseInt(numArg, 10);
        if (parsed === 0) {
            // eslint-disable-next-line max-depth
            if (numArg.replaceAll('0', '') === '') {
                return 0;
            }
        } else if (Number.isSafeInteger(parsed)) {
            return parsed;
        }
    }
    return false;
};

export const IsInt = (numArg: string | undefined, min: number) => {
    const parsed = ParseIntReliable(numArg || '');

    return parsed !== false && parsed >= min ? parsed : undefined;
};