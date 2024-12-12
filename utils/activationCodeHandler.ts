import User, { activationInfoType } from "@/model/User";

export async function validateActivationCode(
    email: string,
    activationCode: string
) {
    try{
        const user = await User.findOne({
            email,
            'activationCodes': {
                $elemMatch: {
                    code: activationCode,
                    used: false
                }
            }
        })

        if (!user) {
            return {
                success: false,
                message: 'Invalid or already used activation code'
            }
        }

        const codeEntry: activationInfoType = user.activationInfos.find(
            (info: activationInfoType) => info.code === activationCode && !info.used
        )

        if (!codeEntry) {
            return {
                success: false,
                message: 'Activation code not found'
            }
        }

        const productRoleMap = {
            'saa-topics': 'saaUser',
            'dop-topics': 'dopUser',
            'sap-topics': 'sapUser'
        }
        
        const newRole = productRoleMap[codeEntry.product as keyof typeof productRoleMap]

        if (!newRole) {
            return {
                success: false,
                message: 'Invalid product'
            }
        }

        if (!user.roles.includes(newRole)) {
            user.roles.push(newRole)
        }

        user.subscriptionProducts.push({
            type: codeEntry.product,
            activationDate: new Date(),
            expirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now
        })

        codeEntry.used = true

        await user.save()

        return {
            success: true,
            message: `Activated ${codeEntry.product}`,
            roles: user.roles
        }
    }catch(error){
        console.error('Activation error:', error)
        return {
            success: false,
            message: 'An error occurred during activation'
        }
    }
}