import { useCallback } from 'react';

import { AnyObject, ObjectSchema, ValidationError } from 'yup';

export const useYupValidationResolver = <T extends AnyObject>(validationSchema: ObjectSchema<T, AnyObject>) =>
  useCallback(
    async (data: any) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: (errors as ValidationError).inner.reduce(
            (allErrors, currentError) =>
              currentError?.path
                ? {
                    ...allErrors,
                    [currentError.path]: {
                      type: currentError.type ?? 'validation',
                      message: currentError.message,
                    },
                  }
                : allErrors,
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
