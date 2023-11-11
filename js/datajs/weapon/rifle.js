/* 步枪 */

const rifleWeaponAttributes = {
    '模版':{
        roleProperties: '虚',       /* 武器属性 */
        weaponType: '单手剑',       /* 武器类型 */
        weaponCoefficient: 3,       /* 武器系数 */
        crit: 1,                    /* 自带暴击 */
        addAtk: 1,                  /* 攻击加成 */
        addDef: 1,                  /* 防御加成 */
        addHP: 1,                   /* 生命加成 */
        addHeal: 1,                 /* 回血加成 */
        basicAtk: 1,                /* 1级攻击白值 */
        basicDef: 1,                /* 1级防御白值 */
        basicHeal: 1,               /* 1级回血值白值 */
        skill: 1,                   /* 技伤 */
        cdSkill: 1,                 /* cd */
        reduceDamage: 1,            /* 伤害减免 */
    },
    '无边绝望':{
        roleProperties: '暗',    
        weaponType: '步枪',    
        weaponCoefficient: 2.5,    
        crit: 10,                 
        addAtk: 10,               
        addDef: 15,               
        addHP: 15,                
        addHeal: 0,              
        basicAtk: 238,               
        basicDef: 0,               
        basicHeal: 0,               
        skill: 20,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },

}