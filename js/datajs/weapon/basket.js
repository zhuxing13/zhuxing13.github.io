/* 篮子 */

const basketWeaponAttributes = {
    '未装备':{
        roleProperties: '虚',       /* 武器属性 */
        weaponType: '篮子',         /* 武器类型 */
        weaponCoefficient: 4,       /* 武器系数 */
        crit: 0,                    /* 自带暴击 */
        addAtk: 0,                  /* 攻击加成 */
        addDef: 0,                  /* 防御加成 */
        addHP: 0,                   /* 生命加成 */
        addHeal: 0,                 /* 回血加成 */
        basicAtk: 0,                /* 1级攻击白值 */
        basicDef: 0,                /* 1级防御白值 */
        basicHeal: 0,               /* 1级回血值白值 */
        skill: 0,                   /* 技伤 */
        cdSkill: 0,                 /* cd */
        reduceDamage: 0,            /* 伤害减免 */
    },
    '梅丽尔':{
        roleProperties: '土',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 15,               
        addHP: 15,                
        addHeal: 0,              
        basicAtk: 150,               
        basicDef: 0,               
        basicHeal: 210,               
        skill: 24,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '仙玉':{
        roleProperties: '虚',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 0,                 
        addAtk: 10,               
        addDef: 22,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 154,               
        basicDef: 0,               
        basicHeal: 210,               
        skill: 0,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '花鸟风月':{
        roleProperties: '火',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 16,                
        addHeal: 20,              
        basicAtk: 151,               
        basicDef: 0,               
        basicHeal: 218,               
        skill: 20,              
        cdSkill: 0,            
        reduceDamage: 0,         
    },
    '紫魄':{
        roleProperties: '暗',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 16,                
        addHeal: 0,              
        basicAtk: 148,               
        basicDef: 0,               
        basicHeal: 218,               
        skill: 20,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '赞美诗':{
        roleProperties: '光',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 0,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 154,               
        basicDef: 0,               
        basicHeal: 216,               
        skill: 16,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '日食':{
        roleProperties: '光',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 2,                 
        addAtk: 10,               
        addDef: 16,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 151,               
        basicDef: 0,               
        basicHeal: 212,               
        skill: 18,              
        cdSkill: 22,            
        reduceDamage: 0,         
    },
    '万波息笔':{
        roleProperties: '水',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 6,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 146,               
        basicDef: 0,               
        basicHeal: 216,               
        skill: 20,              
        cdSkill: 12,            
        reduceDamage: 0,         
    },
    '海之呼唤':{
        roleProperties: '虚',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 16,                
        addHeal: 0,              
        basicAtk: 147,               
        basicDef: 0,               
        basicHeal: 202,               
        skill: 22,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '仙山拳秘籍':{
        roleProperties: '光',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 18,                
        addHeal: 0,              
        basicAtk: 150,               
        basicDef: 0,               
        basicHeal: 206,               
        skill: 20,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },
    '镜花水月':{
        roleProperties: '虚',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 20,                
        addHeal: 0,              
        basicAtk: 147,               
        basicDef: 0,               
        basicHeal: 202,               
        skill: 20,              
        cdSkill: 16,            
        reduceDamage: 0,         
    },
    '海洋之泪':{
        roleProperties: '水',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 2,                 
        addAtk: 0,               
        addDef: 18,               
        addHP: 28,                
        addHeal: 24,              
        basicAtk: 144,               
        basicDef: 0,               
        basicHeal: 220,               
        skill: 16,              
        cdSkill: 0,            
        reduceDamage: 0,         
    },
    '千变万化':{
        roleProperties: '虚',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 3,                 
        addAtk: 10,               
        addDef: 20,               
        addHP: 22,                
        addHeal: 0,              
        basicAtk: 150,               
        basicDef: 0,               
        basicHeal: 200,               
        skill: 16,              
        cdSkill: 18,            
        reduceDamage: 0,         
    },
    '皮诺':{
        roleProperties: '土',
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 4,                 
        addAtk: 10,               
        addDef: 18,               
        addHP: 16,                
        addHeal: 0,              
        basicAtk: 147,               
        basicDef: 0,               
        basicHeal: 206,               
        skill: 20,              
        cdSkill: 18,            
        reduceDamage: 0,      
    },
    '艾玛':{
        roleProperties: '虚',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 0,                 
        addAtk: 0,               
        addDef: 0,               
        addHP: 20,                
        addHeal: 26,              
        basicAtk: 154,               
        basicDef: 0,               
        basicHeal: 214,               
        skill: 20,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
    '杰克·弗罗斯特':{
        roleProperties: '水',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 2,                 
        addAtk: 0,               
        addDef: 18,               
        addHP: 20,                
        addHeal: 28,              
        basicAtk: 150,               
        basicDef: 0,               
        basicHeal: 218,               
        skill: 0,              
        cdSkill: 15,            
        reduceDamage: 0,         
    },
    '好奇心终结者':{
        roleProperties: '暗',    
        weaponType: '篮子',    
        weaponCoefficient: 4,    
        crit: 5,                 
        addAtk: 10,               
        addDef: 15,               
        addHP: 15,                
        addHeal: 0,              
        basicAtk: 160,               
        basicDef: 0,               
        basicHeal: 180,               
        skill: 25,              
        cdSkill: 20,            
        reduceDamage: 0,         
    },

}